import * as React from 'react';

import { View, Image, Text } from 'remax/wechat';

import styles from './index.css';

export default () => {
  return (
    <View
      className={styles.app}
      style={{
        backgroundImage: `url(
          ${process.env.REMAX_APP_DOMAIN}/image?name=qrcode-background.png
        )`,
        backgroundSize: 'cover',
      }}>
      <View className={styles.header}>
        <Image
          src={`${process.env.REMAX_APP_DOMAIN}/image?name=subTitle.png`}
          alt='title'
          mode='widthFix'
          className={styles.title}
        />
      </View>
      <View className={styles.describe}>
        <View className={styles['describe-item']}>
          想要了解你自己擅长什么样的工作吗？
        </View>
        <View className={styles['describe-item']}>
          想要知道你自己适合哪种类型的伴侣吗？
        </View>
        <View className={styles['describe-item']}>
          想要明白你自己应该拥有何样的人生吗？
        </View>
        <View className={styles['describe-item']}>
          关注我们公众号，加入讨论，也许你能更好的掌控自己的这一辈子.
        </View>
      </View>
    </View>
  );
};
