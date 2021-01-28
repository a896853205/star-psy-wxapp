import * as React from 'react';

import { Button, View, getStorageSync } from 'remax/wechat';
import { navigateTo } from 'remax/one';

import styles from './index.css';

export default () => {
  const back = `${process.env.REMAX_APP_DOMAIN}/image?name=background.png`; 
  return (
    <View className={styles.box}>
      <View
        className={styles.description}
        style={{
          backgroundImage: `url(${back})`,
        }}>
        <View className={styles['description-text']}>
          {getStorageSync('description')}
        </View>
      </View>

      <Button
        className={styles.button}
        onClick={() => {
          navigateTo({
            url: '../feedback/index',
          });
        }}>
        继续
      </Button>
    </View>
  );
};
