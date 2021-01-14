import * as React from 'react';

import { Form, Button, Picker, View } from 'remax/wechat';
import { navigateTo } from 'remax/one';

export default () => {
  return (
    <>
      <Form>
        <View class='section__title'>日期选择器</View>
        <Picker mode='date' start='2015-09-01' end='2017-09-01' bindchange=''>
          <View class='picker'>当前选择: </View>
        </Picker>
        <View class='section__title'>时间选择器</View>
        <Picker mode='time' value='' start='09:01' end='21:01' bindchange=''>
          <View class='picker'>当前选择: </View>
        </Picker>
        <View class='section__title'>时区选择器</View>
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
            '-8 中国, 香港, 台湾',
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
          <View class='picker'>当前选择: </View>
        </Picker>

        <Button onClick={() => {
          navigateTo({
            url: '../feedback/index',
          });
        }}>提交</Button>
      </Form>
    </>
  );
};
