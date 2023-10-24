import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView} from 'react-native';
import type {PropsWithChildren} from 'react';

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState('column');

  return (
    <SafeAreaView style ={styles.safearea}>
      <PreviewLayout
        label="flexDirection"
        values={['column', 'row', 'column-reverse', 'row-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}>
        <View style={[styles.box, {backgroundColor: 'red'}]}>
          <Text style={styles.defaultorder}>1</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'orange'}]}>
        <Text style={styles.defaultorder}>2</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'blue'}]}>
        <Text style={styles.defaultorder}>3</Text>
        </View>
      </PreviewLayout>
    </SafeAreaView>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <View style={styles.row}>
      <Text style={styles.label}>Flex Direction Basics</Text>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8
  },
  box: {
    flex: 1,
    alignItems: 'center',
    //width: '30%',
    //height: '30%',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'black',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    minWidth: '100%'
  },
  safearea: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  defaultorder: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 75,
    color: 'white',
    padding: 20
  }
});

export default FlexDirectionBasics;