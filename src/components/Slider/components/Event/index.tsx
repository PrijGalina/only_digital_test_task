import { Wrapper, Title, Description } from './styles';

interface Event {
  year: number | string;
  description: string;
}

interface EventContentProps {
  event: Event;
}

const EventContent: React.FC<EventContentProps> = ({ event }) => {
  return (
    <Wrapper>
        <Title>
          {event.year}
        </Title>
        <Description>
          {event.description}
        </Description>
    </Wrapper>
  );
}

export default EventContent