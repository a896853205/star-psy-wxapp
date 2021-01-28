import * as React from 'react';

import {
  Form,
  Button,
  Picker,
  View,
  Image,
  request,
  showToast,
  getStorageSync,
  setStorageSync,
} from 'remax/wechat';
import { navigateTo } from 'remax/one';

import styles from './index.css';

const timeZoneRange = [
  '0 Greenwich, England',
  '-1 Mid Europe/Africa',
  '-2 E Europe, E Central Africa',
  '-3 Moscow, Mid-East, E Africa',
  '-3.5 Iran',
  '-4 NW Caspian Sea',
  '-4.5 Afghanistan',
  '-5 Ural Mountains, Russia',
  '-5.5 India',
  '-6 Almaty (Alma ATA), Russia',
  '-6.5 Burma',
  '-7 W Mongolia',
  '-8 中国',
  '-9 Japan',
  '-9.5 Mid Australia',
  '-10 Eastern Russia, Sydney, Australia',
  '-11 Kamchatskiy, E Russia',
  '-12 International Date Line',
  '1 SE Greenland',
  '2 Atlantic Ocean',
  '3 Greenland Time',
  '3.5 Newfoundland Time',
  '4 Atlantic Time',
  '5 Eastern Standard Time',
  '6 Central Standard Time',
  '7 Mountain Standard Time',
  '8 Pacific Standard Time',
  '9 Alaska Time',
  '10 Hawaii',
  '11 Pacific Ocean',
  '12 International Date Line',
];

export default () => {
  const [timeZone, setTimeZone] = React.useState(-1);
  const [date, setDate] = React.useState(undefined);
  const [time, setTime] = React.useState(undefined);
  const image = `${process.env.REMAX_APP_DOMAIN}/image?name=subTitle.png`;

  const saveUser = React.useCallback((timeZone, date, time, callback) => {
    if (timeZone < 0) {
      showToast({
        title: '请选择出生时区',
        icon: 'error',
        duration: 2000,
      });
      return;
    }

    if (!date) {
      showToast({
        title: '请选择出生公历年份',
        icon: 'error',
        duration: 2000,
      });
      return;
    }

    if (!time) {
      showToast({
        title: '请选择出生具体时间',
        icon: 'error',
        duration: 2000,
      });
      return;
    }

    request({
      url: `${process.env.REMAX_APP_DOMAIN}/user`,
      method: 'POST',
      data: {
        name: getStorageSync('nickName'),
        year: date.split('-')[0],
        month: date.split('-')[1],
        day: date.split('-')[2],
        hour: time.split(':')[0],
        minute: time.split(':')[1],
        timeZone: timeZoneRange[timeZone],
      },
      success: res => {
        setStorageSync('descriptionId', res.data.mainData.description.id);
        setStorageSync('userId', res.data.mainData.user.id);
        setStorageSync(
          'description',
          res.data.mainData.description.description
        );
        callback();
      },
      error: () => {
        showToast({
          title: '网络错误,请稍后再试.',
          icon: 'error',
          duration: 2000,
        });
      },
    });
  }, []);


  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src={image}
          alt='title'
          mode='widthFix'
          className={styles.title}
        />
      </View>
      <View className={styles.form}>
        <Form>
          <Picker
            mode='selector'
            range={timeZoneRange}
            bindchange={e => setTimeZone(e.detail.value)}>
            <View className={styles.picker}>
              {timeZone >= 0 ? timeZoneRange[timeZone] : '选择您生日的出生时区'}
            </View>
          </Picker>
          <Picker mode='date' bindchange={e => setDate(e.detail.value)}>
            <View className={styles.picker}>
              {date ? date : '选择您生日的公历年份'}
            </View>
          </Picker>
          <Picker mode='time' bindchange={e => setTime(e.detail.value)}>
            <View className={styles.picker}>
              {time ? time : '选择您生日的具体时间'}
            </View>
          </Picker>

          <View className={styles.describe}>
            精确的出生时间有利于程序正确的计算结果，请务必给与准确的时间地点。
          </View>
          <Button
            className={styles.button}
            onClick={() => {
              saveUser(timeZone, date, time, () => {
                navigateTo({
                  url: '../description/index',
                });
              });
            }}>
            提交
          </Button>
        </Form>
      </View>
    </View>
  );
};
