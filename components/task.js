import { faGlobe, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Contact from './contact';


function Task({taskData, statusData, taskStatusAction}) {
  return (
    <div className={'bg-[#fcfaf8] p-3 rounded-md drop-shadow-md'}>
      <div className={'flex flex-row pb-2 border-b pb-3'}>
        <div className={'basis-1/5 self-center'}>
          <div className={'bg-[#d13a27] rounded-md p-2 text-center py-3'}>
            <FontAwesomeIcon icon={faList} className={'text-white'} size={'2x'}/>
          </div>
        </div>
        <div className={'basis-4/5 self-center'}>
          <div className={'p-2'}>
            <h3 className={'font-bold text-lg'}>{taskData.title}</h3>
            <p className={'text-sm'}>
              <FontAwesomeIcon icon={faGlobe} className={'mr-2'}/>
              <a href={'#'} className={'underline underline-offset-2'}>{taskData.url}</a>
            </p>
          </div>
        </div>
      </div>

      <div className={'pt-3 text-sm'}>
        <div className="grid gap-4">
          <div className={'grid grid-cols-3'}>
            <div className={'text-gray-400'}>
              Contacts
            </div>
            <div className={'col-span-2'}>
              <div className={'grid gap-1'}>
                {taskData?.contacts
                  ? (
                    <>
                      {taskData?.contacts?.map((contactData, i) => (
                        <Contact contactData={contactData} key={i}/>
                      ))}
                    </>
                  )
                  : (<>None</>)
                }
              </div>
            </div>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'text-gray-400'}>
              Last Activity
            </div>
            <div className={'col-span-2'}>
              {taskData.last_activity}
            </div>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'text-gray-400'}>
              Upcoming
            </div>
            <div className={'col-span-2'}>
              {taskData.upcoming}
            </div>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'text-gray-400'}>
              Remainder
            </div>
            <div className={'col-span-2'}>
              {taskData.reminder}
            </div>
          </div>
          <div className={'grid grid-cols-3'}>
            <div className={'text-gray-400'}>
              Status
            </div>
            <div className={'col-span-2'}>
              <select
                value={taskData.status}
                className={'px-2 py-1 border rounded-md'}
                onChange={(data)=> taskStatusAction(taskData, data.target.value)}
              >
                {statusData.map((data, i) => (
                  <option key={i} value={data.key}>{data.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
