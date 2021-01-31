import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import HorizontalCalendar from '../../../../components/calendar/horizontal-calendar/HorizontalCalendar';
import { FreeIntervalHoursApi } from '../../../../services/api/api.types';
import {
  getFreeIntervalHoursOfMonth,
  getFreeIntervalHoursOfDay,
} from '../../../../services/api/ArtistService';
import { addArrayToDictByProp } from '../../../../utils/global';
import BookingSelectHour from '../booking-select-hour/BookingSelectHour';
import ContinueFooter from '../continue-footer/ContinueFooter';

interface Props {
  artistId: number;
  serviceDuration: number;
  onSelectTimeContinue: (day: string, startHour: string) => void;
}

const BookingTime: React.FC<Props> = ({
  artistId,
  serviceDuration,
  onSelectTimeContinue,
}) => {
  const [freeDaysDict, setFreeDaysDict] = useState<
    Record<string, FreeIntervalHoursApi>
  >({});
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  const [selectedHour, setSelectedHour] = useState<string | undefined>();

  const showContinue = !!selectedDay && !!selectedHour;

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0];
    setIsFetching(true);
    getFreeIntervalHoursOfMonth(artistId, todayDate, true)
      .then((res) => {
        const dictByDate = addArrayToDictByProp({}, res, 'date');
        setFreeDaysDict(dictByDate);
      })
      .catch((err) => {
        console.error('get free interval hours of month error', err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedDay) {
      return;
    }
    // fetch free hours after selecting a day
    setIsFetching(true);
    getFreeIntervalHoursOfDay(artistId, selectedDay)
      .then((res) => {
        setFreeDaysDict((prevFreeDaysDict) => {
          return {
            ...prevFreeDaysDict,
            [res.date]: res,
          };
        });
      })
      .catch((err) => {
        console.error('get free interval hours of day error', err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [selectedDay]);

  const freeDaysArr = Object.keys(freeDaysDict);

  const selectDay = (dayString: string) => {
    if (dayString === selectedDay) {
      return;
    }
    setIsFetching(true);
    setSelectedDay(dayString);
    setIsFetching(false);
  };

  const selectHour = (hour: string) => {
    if (selectedHour === hour) {
      return;
    }
    setSelectedHour(hour);
  };

  const onContinue = () => {
    if (!selectedDay || !selectedHour) {
      return;
    }

    onSelectTimeContinue(selectedDay, selectedHour);
  };

  return (
    <>
      <ScrollView>
        <HorizontalCalendar
          freeDays={freeDaysArr}
          isFetching={false}
          onSelectDay={selectDay}
          selectedDay={selectedDay}
        />
        <View>
          <Text></Text>
        </View>
        {selectedDay && freeDaysDict[selectedDay] && (
          <BookingSelectHour
            freeIntervalHours={freeDaysDict[selectedDay]}
            onSelectHour={selectHour}
            selectedHour={selectedHour}
            serviceDuration={serviceDuration}
          />
        )}
      </ScrollView>
      <ContinueFooter show={showContinue} onContinue={onContinue} />
    </>
  );
};

export default BookingTime;
