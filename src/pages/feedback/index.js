import * as React from 'react';

import {
  View,
  Image,
  Text,
  Button,
  Picker,
  request,
  getStorageSync,
  showToast,
} from 'remax/wechat';

import styles from './index.css';

const rangeFc = (max, min) => {
  let res = [];

  for (let i = max; i >= min; i--) {
    res.push(i);
  }

  return res;
};
export default () => {
  const [isFeedback, setIsFeedback] = React.useState(false);
  const back = `${process.env.REMAX_APP_DOMAIN}/image?name=background.png`;
  const imageSubTitle = `${process.env.REMAX_APP_DOMAIN}/image?name=subTitle.png`;
  const imageDownload = `${process.env.REMAX_APP_DOMAIN}/image?name=download.png`;

  const saveFeedback = React.useCallback(mark => {
    request({
      url: `${process.env.REMAX_APP_DOMAIN}/feedback`,
      method: 'POST',
      data: {
        userId: getStorageSync('userId'),
        descriptionId: getStorageSync('descriptionId'),
        mark: rangeFc(100, 1)[mark],
      },
      success: () => {
        showToast({
          title: '感谢反馈.',
          icon: 'success',
          duration: 2000,
        });
        setIsFeedback(true);
      },
      error: () => {
        showToast({
          title: '网络错误,请稍后再试.',
          icon: 'error',
          duration: 2000,
        });
      },
    });
  }, []);

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src={imageSubTitle}
          alt="title"
          mode="widthFix"
          className={styles.title}
        />
      </View>
      <View
        className={styles.description}
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
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
              mode="widthFix"
              src={imageDownload}
            />
            <Text>微信讨论群</Text>
          </View>
          <View className={styles['qrcode-box']}>
            <Image
              className={styles.image}
              mode="widthFix"
              src={imageDownload}
            />
            <Text>公众号</Text>
          </View>
        </View>
        <View>请针对此次描述服务评价打分：</View>
        <Picker
          mode="selector"
          range={rangeFc(100, 1)}
          bindchange={e => saveFeedback(e.detail.value)}
        >
          <Button className={styles.button}>
            {isFeedback ? '感谢反馈' : '1-100'}
          </Button>
        </Picker>
      </View>
    </View>
  );
};
