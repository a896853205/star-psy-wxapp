import * as React from 'react';

import { View, Image, Text, Button, setStorageSync } from 'remax/wechat';
import { navigateTo } from 'remax/one';
import styles from './index.css';

import back from './background';
export default () => {
  return (
    <View
      className={styles.app}
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
      }}>
      <View className={styles.header}>
        <Image
          src={`${process.env.REMAX_APP_DOMAIN}/image?name=title.png`}
          alt='title'
          mode='widthFix'
          className={styles.title}
        />
        <View className={styles.bottom}>
          <View className={styles['bottom-text']}>
            <Text>
            “施莱贝里”是根据出生日期判定的一种特质人格算法。如您是刨腹产出生，请在原有出生日期加1-3天再测试。
            </Text>
          </View>
          <View>
            <Button
              className={styles.button}
              openType='getUserInfo'
              onClick={() => {
                navigateTo({
                  url: '../form/index',
                });
              }}
              // bindgetuserinfo={async value => {
              //   if (value) {
              //     // 加到状态管理里
              //     setStorageSync('nickName', value.detail.userInfo.nickName);
              //     setStorageSync('gender', value.detail.userInfo.gender);
              //   }
              // }}>
            >
              开始测试
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
