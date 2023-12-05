import {View, TextInput, Button, StyleSheet} from 'react-native'

const CustomInput = (
    {
        placeholderProp,
        textItemProp,
        onChangeTextHandlerEvent,
        addItemToListEvent
    }
) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
            />
            <Button
                title="Add"
                color="#89F8FA"
                onPress={addItemToListEvent}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      textInput: {
        width: 200,
        borderBottomColor: "#1D3332",
        borderBottomWidth: 1,
      },
})