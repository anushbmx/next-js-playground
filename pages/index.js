import Head from 'next/head';
import { useState } from 'react';

import Task from '../components/task';

import { Status, Tasks } from '../constants/data';


export default function Home() {
  const [taskList, setTaskList] = useState(Tasks)

  const taskStatusAction = (task, status) => {
    const updateTaskList = [];
    taskList.forEach((data)=>{
      if (data.id === task.id) {
        data.status = status;
        updateTaskList.push(data);
      } else {
        updateTaskList.push(data)
      }
    });
    setTaskList(updateTaskList);
  }

  return (
    <div>
      <Head>
        <title>Kanban Board</title>
        <meta name="description" content="Kanban Board design with next js."/>
      </Head>

      <div className={'flex bg-[#f9f5f3] flex-nowrap w-screen'}>
        {Status.map((statusData, i) => (
          <div className={'w-80 p-3 mb-5'} key={i}>
            <div className={`bg-[#fcfaf8] drop-shadow-md p-3 text-center border-b-4 ${statusData.border} mb-5`}>
              <h2 className={'font-bold text-black'}>{statusData.name}</h2>
            </div>

            <div className="grid gap-6">
              {taskList.filter(item => (item.status === statusData.key)).map((taskData, j) => (
                <Task taskData={taskData} statusData={Status} taskStatusAction={taskStatusAction} key={i}/>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
