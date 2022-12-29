import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

// コンポーネント
function Hello(props) {
  const { children, bang, style } = props;
  // 分割代入
  // props children のchildrenの中に props（world）が入る
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// childrenの中身がわかるように、(app.jsxの存在を知らない人はこのファイル見ただけじゃわからないから)
// propstypesで説明してあげる
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};
// Helloというコンポーネントにわたってくるpropsはchildrenでstringです（文字列

Hello.defaultProps = {
  bang: false,
  style: null,
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
    padding: 16,
    fontWeight: 'bold',
  }
});

export default Hello;