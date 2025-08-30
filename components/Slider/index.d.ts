import React from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/css/effect-fade";
interface EventData {
    year: number;
    description: string;
}
interface SlideData {
    startDate: number;
    endDate: number;
    events: EventData[];
    category: string;
}
interface SliderProps {
    slides: SlideData[];
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
//# sourceMappingURL=index.d.ts.map