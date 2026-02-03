import React from 'react'

const Profile2info = () => {
  return (
    
      <div className="profile2info bg-blue-300 rounded-r-2xl p-2">
        <p>Profile info</p>
        <hr />
        <div className="mainprofileinfo">
          <div className='w-25 h-25 rounded-full mx-auto my-0 flex flex-col items-center justify-center mt-10 bg-amber-100  '>M</div>
          <div className="name text-center mt-5 text-2xl ">Sameer Shaikh</div>
          <div className="profile2_statuse bg-green-300 text-teal-100 w-fit  px-2 py-auto mt-5 rounded-2xl mx-auto">Availabel</div>
          <hr className='mt-5' />
          <p className='text-xl text-gray-500    mx-5 my-2'>Media</p>
          <div className="profile2_media flex gap-2">
            <div className="all_files w-30 bg-sky-300 h-30 flex items-center justify-center gap-0.5 rounded-4xl ">
              <div className="profile2 filesLogo"><i class="fa-solid fa-file"></i></div>
              <div>
                <p>All files</p>
                <p>230</p>
              </div>

            </div>
            <div className="all_files w-30 bg-sky-300 h-30 flex items-center justify-center gap-0.5 rounded-4xl ">
              <div className="profile2 filesLogo"><i class="fa-solid fa-file"></i></div>
              <div>
                <p>All Links</p>
                <p>230</p>
              </div>

            </div>
          </div>
          <p className='text-gray-500 mt-5 mx-5 text-xl'>Files</p>
          <div className="profile2_files flex flex-col gap-2">
            <div className="profile2_documents h-15   bg-gray-200 rounded-3xl  px-2 py-1 flex items-center gap-3">
              <div className="profile2_documentslogo"><i class="fa-regular fa-file"></i></div>
              <div className='flex flex-col  '>
                <div className=' w-50 flex justify-between '>
                  <div className="profile2_documentname">Documents</div>

                </div>
                <p>74 7565mb</p>
              </div>

            </div><div className="profile2_Links h-15   bg-gray-200 rounded-3xl  px-2 py-1 flex items-center gap-3">
              <div className="profile2_documentslogo"><i class="fa-regular fa-file"></i></div>
              <div className='flex flex-col  '>
                <div className=' w-50 flex justify-between '>
                  <div className="profile2_documentname">Links</div>

                </div>
                <p>74 </p>
              </div>

            </div><div className="profile2_videos h-15   bg-gray-200 rounded-3xl  px-2 py-1 flex items-center gap-3">
              <div className="profile2_documentslogo"><i class="fa-regular fa-file"></i></div>
              <div className='flex flex-col  '>
                <div className=' w-50 flex justify-between '>
                  <div className="profile2_documentname">videos</div>

                </div>
                <p>74 7565mb</p>
              </div>



            </div>
          </div>

        </div>
      </div>
      )
}

export default Profile2info