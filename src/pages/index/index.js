import * as React from 'react';

import { View, Image, Text, Button, login } from 'remax/wechat';
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
          src='/auth/title.png'
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
                let code = await login();
                console.log('code:', code);
                // TODO: 加到状态管理里
                navigateTo({
                  url: '../form/index',
                });
              }}>
              开始测试
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
