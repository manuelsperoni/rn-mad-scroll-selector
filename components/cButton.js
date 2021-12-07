import { width } from 'dom-helpers';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export function CButton(props) {
  let styleSize = { padding: 0 };

  if (props.s) {
    styleSize.padding = 6;
    styleSize.borderRadius = 10;
    styleSize.fontSize = 12;
  }
  if (props.m) {
    styleSize.padding = 10;
    styleSize.borderRadius = 15;
    styleSize.fontSize = 14;
  }
  if (props.l) {
    styleSize.padding = 15;
    styleSize.borderRadius = 30;
    styleSize.fontSize = 16;
  }

  let styleType = {};

  if (props.filled) {
    styleType.backgroundColor = props.color;
    styleType.color = 'white';
  }
  if (props.outlined) {
    styleType.borderWidth = 1;
    styleType.borderColor = props.color;
    styleType.color = props.color;
  }
  if (props.ghost) {
    styleType.color = props.color;
  }
  let styleCommon = { flex: 0, margin: props.margin };

  return (
    <TouchableOpacity>
      <Text style={[styleSize, styleType, styleCommon]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export function CButtonIcon(props) {
  let styleSize = {};
  let imageSize = {};

  if (props.s) {
    styleSize.padding = 6;
    styleSize.borderRadius = 10;
    imageSize = { width: 15, height: 15 };
    styleSize.fontSize = 10;
  }
  if (props.m) {
    styleSize.padding = 10;
    styleSize.borderRadius = 15;
    imageSize = { width: 25, height: 25 };
    styleSize.fontSize = 14;
  }
  if (props.l) {
    styleSize.padding = 15;
    styleSize.borderRadius = 25;
    imageSize = { width: 40, height: 40 };
    styleSize.fontSize = 16;
  }

  let styleType = {};

  if (props.filled) {
    styleType.backgroundColor = props.color;
    styleType.color = 'white';
  }
  if (props.outlined) {
    styleType.borderWidth = 1;
    styleType.borderColor = props.color;
    styleType.color = props.color;
  }
  if (props.ghost) {
    styleType.color = props.color;
  }
  let styleCommon = { flex: 0, margin: props.margin };
  return (
    <TouchableOpacity>
      <View style={[styleSize, styleType, styleCommon]}>
        <Image source={props.icon} style={imageSize} />
      </View>
    </TouchableOpacity>
  );
}
