import * as React from 'react';

import { View, Image } from 'remax/wechat';
import { Button, navigateTo } from 'remax/one';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src='https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ'
          className={styles.logo}
          alt='logo'
        />
        <Button className={styles.text} onClick={() => {
          navigateTo({
            url: '../form/index',
          });
        }}>开始</Button>
      </View>
    </View>
  );
};
