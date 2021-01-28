import * as React from 'react';

import { View, Image, Text, Button, setStorageSync } from 'remax/wechat';
import { navigateTo } from 'remax/one';
import styles from './index.css';

import back from './background';
export default () => {
  // TODO: 图片加到后端
  const image = `${process.env.REMAX_APP_DOMAIN}/image?name=title.png`;
  return (
    <View
      className={styles.app}
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
      }}>
      <View className={styles.header}>
        <Image
          src={image}
          alt='title'
          mode='widthFix'
          className={styles.title}
        />
        <View className={styles.bottom}>
          <View className={styles['bottom-text']}>
            <Text>
              “施莱贝里”是一款以特质流派为 依托的的人格测试程序，帮助人们
              了解自我，展现自我。
            </Text>
          </View>
          <View>
            <Button
              className={styles.button}
              openType='getUserInfo'
              bindgetuserinfo={async value => {
                if (value) {
                  // 加到状态管理里
                  setStorageSync('nickName', value.detail.userInfo.nickName);
                  setStorageSync('gender', value.detail.userInfo.gender);
                  navigateTo({
                    url: '../form/index',
                  });
                }
              }}>
              开始测试
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
