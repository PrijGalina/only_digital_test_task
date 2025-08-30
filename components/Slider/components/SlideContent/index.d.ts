import React from 'react';
interface EventData {
    year: number;
    description: string;
}
interface SlideContentProps {
    startDate: number;
    endDate: number;
    startRef: React.Ref<HTMLDivElement>;
    endRef: React.Ref<HTMLDivElement>;
    events: EventData[];
    category: string;
    isMobile: boolean;
}
declare const SlideContent: React.FC<SlideContentProps>;
export default SlideContent;
//# sourceMappingURL=index.d.ts.map