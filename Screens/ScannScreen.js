import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-Permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state={
      hasCamaraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState:'normal',
    }
  }
  getCamaraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCamaraPermissions:status==="granted"
    })
  }
    render() {
      const hasCamaraPermissions=this.state.hasCamaraPermissions
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{hasCamaraPermissions===true?this.state.scannedData:"request camera permission"}</Text>
          <TouchableOpacity 
          onPress={this.getCamaraPermissions}
          >
            <Text>scan QR code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }