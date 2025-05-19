import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp, BsFileLock2Fill, BsFillFilePersonFill, BsFillQuestionSquareFill, BsHeadset, BsInfoSquareFill, BsJournals } from 'react-icons/bs'

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | number>('')

  let arra = [
    { value: 1, lebel: 'FAQs', icon: <BsFillQuestionSquareFill /> },
    { value: 2, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
    { value: 3, lebel: 'About Us', icon: <BsInfoSquareFill /> },
    { value: 4, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
    { value: 5, lebel: 'Terms and Conditions', icon: <BsJournals /> },
  ]

  let arrmiddle = [
    { value: 6, lebel: 'Language Setting', icon: <BsFillFilePersonFill /> },
    { value: 7, lebel: 'Live Support', icon: <BsHeadset /> },
  ]

  let arrayfirst = [
    {
      value: 8,
      lebel: 'Sports',
      icon: <BsFillQuestionSquareFill />,
      sub_menu: [
        { value: 9, lebel: 'FAQs', icon: <BsFillQuestionSquareFill /> },
        { value: 10, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 11, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 12, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
        { value: 10, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 27, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 20, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 31, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 52, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
        { value: 43, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 81, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 42, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
        { value: 20, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 31, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 52, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
        { value: 29, lebel: 'Terms and Conditions', icon: <BsJournals /> },
      ],
    },
    {
      value: 14,
      lebel: 'Cashino',
      icon: <BsFillFilePersonFill />,
      sub_menu: [
        { value: 1, lebel: 'FAQs', icon: <BsFillQuestionSquareFill /> },
        { value: 15, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 16, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 17, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
        { value: 18, lebel: 'Terms and Conditions', icon: <BsJournals /> },
      ],
    },
    {
      value: 19,
      lebel: 'Lottery',
      icon: <BsInfoSquareFill />,
      sub_menu: [
        { value: 20, lebel: 'FAQs', icon: <BsFillQuestionSquareFill /> },
        { value: 21, lebel: 'Contact Us', icon: <BsFillFilePersonFill /> },
        { value: 22, lebel: 'About Us', icon: <BsInfoSquareFill /> },
        { value: 23, lebel: 'Privacy Policy', icon: <BsFileLock2Fill /> },
        { value: 24, lebel: 'Terms and Conditions', icon: <BsJournals /> },
      ],
    },
    { value: 25, lebel: 'Aura', icon: <BsFileLock2Fill /> },
    { value: 26, lebel: 'Up Down', icon: <BsJournals /> },
    { value: 27, lebel: 'Bingo', icon: <BsJournals /> },
    { value: 28, lebel: 'Racing', icon: <BsJournals /> },
  ]

  return (
    <React.Fragment>
      <div
        className="border-r-[2px] h-full overflow-y-auto"
        style={{ borderColor: "#FFFFFF33" }}
      >
        <div
          className="text-[#ffffffb3] box-shadow-inset py-6 px-4 sm:px-6 md:px-8 max-w-full"
          style={{ boxShadow: "inset #000 0 -2px 1px 0" }}
        >
          {arrayfirst?.map((item: any) => (
            <div
              key={item.value}
              className="flex pb-3 justify-between cursor-pointer"
              onClick={() => setSelectedMenu((pre) => (pre === item.value ? "" : item.value))}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span> {item.lebel}</span>
                </div>
                {selectedMenu == item?.value ? (
                  <div className="pl-2 pt-2 w-full">
                    {item?.sub_menu?.map((subitem: any) => (
                      <div key={subitem.value} className="flex pb-2 items-center justify-between">
                        <div className="flex items-center gap-2 w-full">
             
                          <span> {subitem.lebel}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              {item?.sub_menu?.length > 0 ? (
                <div className="mt-1">
                  {selectedMenu == item?.value ? (
                    <BsChevronDown fontSize={15} />
                  ) : (
                    <BsChevronUp fontSize={15} />
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div
          className="text-[#ffffffb3] box-shadow-inset py-6 px-4 sm:px-6 md:px-8 max-w-full"
          style={{ boxShadow: "inset #000 0 -2px 1px 0" }}
        >
          {arrmiddle?.map((item: any) => (
            <div
              key={item.value}
              className="flex pb-3 items-center justify-between cursor-pointer"
              onClick={() => setSelectedMenu((pre) => (pre === item.value ? "" : item.value))}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span> {item.lebel}</span>
                </div>

                {selectedMenu == item?.value ? (
                  <div>
                    {item?.sub_menu?.map((subitem: any) => (
                      <div
                        key={subitem.value}
                        className="flex pb-2 items-center justify-between"
                      >
                        <div className="flex items-center gap-2 ">
                          <span>{subitem.icon}</span>
                          <span> {subitem.lebel}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              {item?.sub_menu?.length > 0 ? (
                <div>
                  {selectedMenu == item?.value ? (
                    <BsChevronDown fontSize={15} />
                  ) : (
                    <BsChevronUp fontSize={15} />
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div
          className="text-[#ffffffb3] box-shadow-inset py-6 px-4 sm:px-6 md:px-8 max-w-full"
          style={{ boxShadow: "inset #000 0 -2px 1px 0" }}
        >
          {arra?.map((item: any) => (
            <div
              key={item.value}
              className="flex pb-3 items-center justify-between cursor-pointer"
              onClick={() => setSelectedMenu((pre) => (pre === item.value ? "" : item.value))}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span> {item.lebel}</span>
                </div>

                {selectedMenu == item?.value ? (
                  <div className="ms-3">
                    {item?.sub_menu?.map((subitem: any) => (
                      <div
                        key={subitem.value}
                        className="flex pb-2 items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span>{subitem.icon}</span>
                          <span> {subitem.lebel}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              {item?.sub_menu?.length > 0 ? (
                <div>
                  {selectedMenu == item?.value ? (
                    <BsChevronDown fontSize={15} />
                  ) : (
                    <BsChevronUp fontSize={15} />
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar
