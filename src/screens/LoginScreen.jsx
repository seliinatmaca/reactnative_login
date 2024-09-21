import {useNavigation} from '@react-navigation/native';
import {
  View,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  FadeIn,
  //yukarıda aşağıya
  FadeInDown,
  //aşağıdan yukarıya
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full h-full bg-white">
      <StatusBar barStyle="light-content" />
      <Image
        className="absolute w-full h-full"
        source={require('../../assets/images/background.png')}
      />

      {/* lights */}
      <View className="absolute flex-row justify-around w-full">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/* title and form */}
      <View className="flex justify-around w-full h-full pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-white">
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="E-mail" placeholderTextColor="gray" />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="w-full p-5 mb-3 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3 mb-3 bg-sky-400 rounded-2xl">
              <Text className="text-xl font-bold text-center text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="flex-row justify-center">
            <Text>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
