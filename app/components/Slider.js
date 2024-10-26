import { StyleSheet, View, FlatList, Dimensions, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import Slideritem from './Slideritem';
import productosDataSlider from './data/SliderData';

const { width: screenWidth } = Dimensions.get('window');

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View>
      <FlatList
        data={productosDataSlider}
        renderItem={({ item }) => <Slideritem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {productosDataSlider.map((_, i) => {
          const dotWidth = scrollX.interpolate({
            inputRange: [
              (i - 1) * screenWidth, 
              i * screenWidth, 
              (i + 1) * screenWidth
            ],
            outputRange: [12, 30, 12],
            extrapolate: 'clamp'
          });

          const dotOpacity = scrollX.interpolate({
            inputRange: [
              (i - 1) * screenWidth, 
              i * screenWidth, 
              (i + 1) * screenWidth
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                { width: dotWidth, opacity: dotOpacity }
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1da1f2',
    marginHorizontal: 8,
  },
});
