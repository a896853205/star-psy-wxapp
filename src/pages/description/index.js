import * as React from 'react';

import { Button, View, getStorageSync } from 'remax/wechat';
import { navigateTo } from 'remax/one';

import back from '../../../public/des/background.png';
import styles from './index.css';

export default () => {
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
