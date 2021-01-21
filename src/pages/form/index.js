import * as React from 'react';

import { Form, Button, Picker, View, Image } from 'remax/wechat';
import { navigateTo } from 'remax/one';

import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src='/form/subTitle.png'
          alt='title'
          mode='widthFix'
          className={styles.title}
        />
      </View>
      <View className={styles.form}>
        <Form>
          <Picker
            mode='selector'
            value=''
            range={[
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
            ]}
            bindchange=''>
            <View className={styles.picker}>选择您生日的出生时区</View>
          </Picker>
          <Picker mode='date' start='2015-09-01' end='2017-09-01' bindchange=''>
            <View className={styles.picker}>选择您生日的公历年份</View>
          </Picker>
          <Picker mode='time' value='' bindchange=''>
            <View className={styles.picker}>选择您生日的具体时间</View>
          </Picker>

          <View className={styles.describe}>
            精确的出生时间有利于程序正确的计算结果，请务必给与准确的时间地点。
          </View>
          <Button
            className={styles.button}
            onClick={() => {
              navigateTo({
                url: '../feedback/index',
              });
            }}>
            提交
          </Button>
        </Form>
      </View>
    </View>
  );
};
