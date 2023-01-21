import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <EventList items={featuredEvents} />;
}

export default HomePage;
