import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from '@rneui/themed'


import { PublicRequest } from '../RequestMethod'
import { Dropdown } from 'react-native-element-dropdown'
import dayjs from "dayjs";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <Text style={styles.RegisterName}>registration form</Text>
        <RegisterForm navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}

const RegisterForm = ({ navigation }) => {
  const [firstname, setFirstname] = useState()
  const [middlename, setMiddlename] = useState()
  const [lastname, setLastname] = useState()

  const [Loading, setLoading] = useState(false)
  const [BirthdayMonth, setBirthdayMonth] = useState(null)
  const [BirthdayDays, setBirthdayDays] = useState(null)
  const [BirthdayYear, setBirthdayYear] = useState()
  const [Address, setAddress] = useState()
  const [Occupation, setOccupation] = useState()
  const [NearestKin, setNearestKin] = useState()
  const [sex, setsex] = useState(null)
  const [Relationship, setRelationship] = useState()
  const [Occupation2, setOccupation2] = useState()
  const [Omited, setOmited] = useState(false)

  const months = [
    { label: 'Jan', value: 'January' },
    { label: 'Feb', value: 'February' },
    { label: 'Mar', value: 'March' },
    { label: 'Apr', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'Jun', value: 'June' },
    { label: 'Jul', value: 'July' },
    { label: 'Aug', value: 'August' },
    { label: 'Sep', value: 'September' },
    { label: 'Oct', value: 'October' },
    { label: 'Nov', value: 'November' },
    { label: 'Dec', value: 'December' },
  ]

  const days = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
    { label: '11', value: 11 },
    { label: '12', value: 12 },
    { label: '13', value: 13 },
    { label: '14', value: 14 },
    { label: '15', value: 15 },
    { label: '16', value: 16 },
    { label: '17', value: 17 },
    { label: '18', value: 18 },
    { label: '19', value: 19 },
    { label: '20', value: 20 },
    { label: '21', value: 21 },
    { label: '22', value: 22 },
    { label: '23', value: 23 },
    { label: '24', value: 24 },
    { label: '25', value: 25 },
    { label: '26', value: 26 },
    { label: '27', value: 27 },
    { label: '28', value: 28 },
    { label: '29', value: 29 },
    { label: '30', value: 30 },
    { label: '31', value: 31 },
  ]

  const Sex = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]


  

  const HandleButtonContinue = () => {
    setLoading(true)
    if (
      firstname &&
      BirthdayMonth &&
      BirthdayDays &&
      BirthdayYear &&
      Address &&
      Occupation &&
      NearestKin &&
      sex &&
      Relationship &&
      Occupation2
    ) {

      const birthday = `${BirthdayMonth} ${BirthdayDays}, ${BirthdayYear}`

      const user = {
        firstname,
        middlename,
        lastname,
        birthday,
        Address,
        Occupation,
        NearestKin,
        sex,
        Relationship,
        Occupation2
      }
      navigation.navigate('Register2', user )
      setLoading(false)
    } else {
      setLoading(false)
      setOmited(true)
    }
  }

  useEffect(() => {
    const IntervalButton = setInterval(() => {
      setOmited(false)
    }, 1000)
    return () => clearInterval(IntervalButton)
  }, [Omited])

  return (
    <View style={styles.formMain}>
      <Text style={styles.formText}>first name:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter first name here"
        onChangeText={setFirstname}
        autoCorrect={false}
      />
      <Text style={styles.formText}>middle name:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter middle name here"
        onChangeText={setMiddlename}
        autoCorrect={false}
      />
      <Text style={styles.formText}>last name:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter last name here"
        onChangeText={setLastname}
        autoCorrect={false}
      />
      <View style={styles.formTextDivide}>
        <View>
          <Text style={styles.formText}>Birth date:</Text>
          <View style={styles.birthdateDropdown}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={months}
              value={BirthdayMonth}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Month"
              onChange={(item) => setBirthdayMonth(item.value)}
            />

            <Dropdown
              style={styles.dropdown2}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={days}
              value={BirthdayDays}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder="Day"
              onChange={(item) => setBirthdayDays(item.value)}
            />

            <TextInput
              style={styles.textInputYear}
              placeholder="Year"
              onChangeText={setBirthdayYear}
              autoCorrect={false}
            />
          </View>
        </View>
        <View>
          <Text style={styles.formText}>Sex:</Text>
          <Dropdown
            style={styles.dropdown3}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Sex}
            value={sex}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="Sex"
            onChange={(item) => setsex(item.value)}
          />
        </View>
      </View>
      <View style={styles.formTextDivide}>
        <View>
          <Text style={styles.formText}>Address:</Text>
          <View style={styles.birthdateDropdown}>
            <TextInput
              style={styles.textInputAddress}
              placeholder="Enter Address here"
              onChangeText={setAddress}
              autoCorrect={false}
            />
          </View>
        </View>
        <View>
          <Text style={styles.formText}>Occupation:</Text>
          <TextInput
            style={styles.textInputOccupation}
            placeholder="Enter Occupation here"
            onChangeText={setOccupation}
            autoCorrect={false}
          />
        </View>
      </View>
      <Text style={styles.formText}>Nearest Kin:</Text>
      <TextInput
        style={styles.formTextInput}
        placeholder="Enter Nearest Kin here"
        onChangeText={setNearestKin}
        autoCorrect={false}
      />
      <View style={styles.formTextDivide}>
        <View>
          <Text style={styles.formText}>Relationship:</Text>
          <View style={styles.birthdateDropdown}>
            <TextInput
              style={styles.textInputAddress}
              placeholder="Enter Relationship here"
              onChangeText={setRelationship}
              autoCorrect={false}
            />
          </View>
        </View>
        <View>
          <Text style={styles.formText}>Occupation:</Text>
          <TextInput
            style={styles.textInputOccupation}
            placeholder="Enter Occupation here"
            onChangeText={setOccupation2}
            autoCorrect={false}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          loading={Loading ? true : false}
          title="Continue"
          color={Omited ? '#EC5442' : '#03989E'}
          buttonStyle={styles.RegisterButton}
          onPress={HandleButtonContinue}
        />
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#38B6FF',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 30,
  },
  RegisterName: {
    color: 'black',
    fontSize: 32,
    fontWeight: '500',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  SchedText: {
    textAlign: 'center',
    fontSize: 16,
  },
  logoWrapper: {
    marginTop: 8,
    backgroundColor: '#FFF',
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'transparent',
  },
  formMain: {
    width: '100%',
    paddingVertical: 6,
    marginTop: 12,
  },
  formTextDivide: {
    zIndex: 999,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  formDivideContainer: {
    flexDirection: 'row',
  },

  formText: {
    textTransform: 'capitalize',
    color: 'black',
    fontSize: 16,
    paddingTop: 6,
    zIndex: 30,
  },
  formTextInput: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
    height: 36,
    backgroundColor: 'white',
  },
  BouncyCheckboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 6,
  },
  normalText: {
    color: 'white',
    fontSize: 13,
  },
  buttonContainer: {
    marginTop: 8,
    alignItems: 'center',
    width: '100%',
  },
  LoginButton: {
    fontSize: 16,
    width: 200,
    borderRadius: 20,
  },
  RegisterButton: {
    fontSize: 16,
    width: 150,
    borderRadius: 20,
    marginTop: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdown: {
    width: 70,
    backgroundColor: 'white',
  },
  dropdown2: {
    marginLeft: 4,
    width: 60,
    backgroundColor: 'white',
  },
  dropdown3: {
    width: 90,
    backgroundColor: 'white',
  },
  birthdateDropdown: {
    width: '100%',
    flexDirection: 'row',
  },
  textInputYear: {
    marginLeft: 4,
    width: 60,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    height: 36,
    color: 'rgba(0,0,0,0.6)',
    backgroundColor: 'white',
  },
  textInputAddress: {
    width: 190,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    height: 36,
    color: 'rgba(0,0,0,0.6)',
    backgroundColor: 'white',
  },
  textInputOccupation: {
    width: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    height: 36,
    color: 'rgba(0,0,0,0.6)',
    backgroundColor: 'white',
  },
})
