import {
    Timeline,
    TimelineItem,
    TimelineTitle,
    TimelineDescription,
    TimelineTime,
    TimelineHeader,
  } from '@/components/timeline';
  
  import { TimelineItemType } from '@/types';
  
  const timelineData: TimelineItemType[] = [
    {
      id: 1,
      title: 'Start to learn FrontEnd Development',
      description:
        'Basic frontend languages like HTML, CSS and JavaScript. Also learn some styling frameworks like Bootstrap and Tailwind.',
      time: 'Mart, 2023',
    },
    {
      id: 2,
      title: 'Start to learn React and Next.js',
      description:
        'My choice for Javascript framework is React. I also learn Next.js, a framework of React.',
      time: 'October, 2023',
    },
    {
      id: 3,
      title: 'Start to make a simple and advance projects',
      description: 'Learn other languages and libraries like Typescript, Node.js, MongoDB, Drizzle, Supabase, Shadcn etc. Try to find inspiration to make funny and useful websites, projects and apps. I want to make my develop knowledge more advanced.',
      time: 'Mart, 2024',
    },
  ];
  
  export const TimelineLayout = () => {
    return (
      <Timeline className='mt-8'>
        {timelineData.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineHeader>
              <TimelineTime>{item.time}</TimelineTime>
              <TimelineTitle>{item.title}</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineItem>
        ))}
      </Timeline>
    );
  };