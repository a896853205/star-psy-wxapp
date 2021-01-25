import * as React from 'react';

import { View, Image, Text, Button } from 'remax/wechat';

import back from '../../../public/des/background.png';
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
      <View
        className={styles.description}
        style={{
          backgroundImage: `url(${back})`,
        }}>
        <View className={styles['description-text']}>
          <View className={styles['description-item']}>
            “施莱贝里”的描述一般针对正常成长环境下成年人的先天性格特征的描述，如果用户出现以下情况当另作看待：
          </View>
          <View className={styles['description-item']}>
            1成年之前，成长环境，家庭环境有重大变故或有恶劣影响形成的有一定人格障碍的性格。
          </View>
          <View className={styles['description-item']}>
            2有生物学遗传精神疾病的性格。
          </View>
          <View className={styles['description-item']}>
            3出生时间，地点准度无法确认。
          </View>
        </View>
      </View>
      <View className={styles.content}>
        <View>
          欢迎大家积极参与给与结果评分，帮助开发者更好完善内容，同时也欢迎加入公众号与微信群。
        </View>
        <View className={styles.qrcode}>
          <View className={styles['qrcode-box']}>
            <Image
              className={styles.image}
              mode='widthFix'
              src='/feedback/download.png'
            />
            <Text>微信讨论群</Text>
          </View>
          <View className={styles['qrcode-box']}>
            <Image
              className={styles.image}
              mode='widthFix'
              src='/feedback/download.png'
            />
            <Text>公众号</Text>
          </View>
        </View>
        <View>请针对此次描述服务评价打分：</View>
        <Button className={styles.button}>1-100</Button>
      </View>
    </View>
  );
};
