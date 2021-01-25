import * as React from 'react';

import { Button, View } from 'remax/wechat';
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
          外向不稳定型性格，情绪兴奋性高，脾气火爆，反应速度快，热情开朗，阳光自信，在工作中能保持积极主动，有着十分果断执行力，做事情也是风风火火，比较高调的去表现自我，发挥自我。强大的行动力和办事效率会给人以精干的表现，不过考虑问题缺乏长远性和深度，思考问题过于简单，对需要耐心的事情很难耐住性子。也会因为过于爱面子而喜欢强撑自己，渴望能成为工作中出色的领导型人才。自尊心强，无法忍受他人的诋毁与质疑。希望收获他人的赞美和鼓励。为人善良直率，没有太多心机。喜欢直接了当，简简单单。
          拥有充沛的精力在生活中
          爱刺激爱冒险的精神总是能乐于尝试新鲜事物，无法忍受枯燥单调的生活。对朋友慷慨热情，同时十分仗义。优秀的表达能力善于争辩的能力在和朋友沟通过程之中总能占据上风。
          爱情方面，情感发生迅速，积极主动，对带自己的喜欢的人无微不至，无论是在心灵上还是物质上都是大手大脚，大开大合，会幼稚的像小孩。不过也会因为激情消退而感情迅速转移，缺乏专注的品质。
        </View>
      </View>

      <Button
        className={styles.button}
        onClick={() => {
          // TODO: 请求, 成功回调就是to description
          navigateTo({
            url: '../feedback/index',
          });
        }}>
        继续
      </Button>
    </View>
  );
};
