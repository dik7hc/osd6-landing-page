import { StoryProps } from "@/components/story-card/story-card"


const Testimonials = [
  {
    quote:
      "[Ly Tan Dat + GS/OSD6]: Dat has been **a great support** in ensuring document accuracy and enabling the consistent and smooth ASN processing for battery orders. He has been a very valuable member of the team working with Sebang, and we would like to thank him for his hard work in coordinating shipping documents.",
    name: "",
    dept: "MA - Singapore"
  },
  {
    quote:
      "Dang Thi Viet Ha (GS/OSD6-APAC22) is **very support on LOG topics**, she always proactively involved the topic and gave the valuable advice from her prospective. 2nd, her response is quite quick . 3rd her cooperation level is quite high. it is always **happy to work with her** . i think if she is able to build up some products knowledge would help the business overall.",
    name: "",
    dept: "MA - China"
  },
  {
    quote:
      "Dang Thi Viet Ha (GS/OSD6-APAC22): Ms Ha is **very experienced** and has great innovative thinking. She provides **great support** to the supply chain and has very good initiatives and proactiveness. She is able to lead a stakeholder meeting very well, providing clear details, actions taken and open points to be done.",
    name: "",
    dept: "MA - Singapore"
  },
  {
    quote:
      "Good and supportive. Especially some good cooperators as below：Pham Thuy Hang is **highly professional and responsible** to take the tasks, ensuring smooth workflows and project success. Pham Ngoc Uyen Phuong as a source planner for Korea/MY source， consistently **delivering quality work** and meeting deadlines with precision.",
    name: "",
    dept: "MA - Vietnam"
  },
  {
    quote:
      "i am **very satisfied** with the service provided by Le Lam Huu Loc (GS/OSD6-APAC22 MA/LOP2-APAC0. He is **very efficient** when it comes to attending to my inquiry and advise me on the possible solutions to resolve my issues.",
    name: "",
    dept: "MA - Vietnam"
  },
  {
    quote:
      "I've had the pleasure of working with Ly Tan Dat on several occasions, and he has consistently been **extremely helpful and supportive**. He always **responds quickly** to ad-hoc requests and ensures we have the information or support we need, even under tight timelines. His reliability and positive attitude make collaboration seamless and enjoyable. Truly appreciate his dedication and teamwork.",
    name: "",
    dept: "MA - Singapore"
  },
  {
    quote:
      "Nguyen Thi Thanh Minh has been **very helpful** to plan according to customer needs despite this is not a traditional automotive customer. She is also **willing to jump in** an assist on urgent topics on sudden air freight request and handles cross divisional exchanges well.",
    name: "",
    dept: "MA - Singapore"
  },
  {
    quote:
      "Phan Thi Na is **available to support urgent cases** when request raised, and on daily operation, she is flexible to cover any sudden changes.",
    name: "",
    dept: "MA - Vietnam"
  },
  {
    quote:
      "Ryan Tran Ngoc Le (GS/OSD6-APAC22): Ryan is a **very experienced planner** with customer-oriented mindset, he can sort out the end-to-end process and highlight all the potential risks and provide proposals for **complex battery business** and keep key stakeholders updated on the supply status.",
    name: "",
    dept: "MA - China"
  },
  {
    quote:
      "The Vietnam colleague Le Lam Huu Loc (GS/OSD6-APAC22 MA/LOP2-APAC) can always give us **great supports** on MA/CFH6 CN team's business, especially for the large engine part numbers which have long lead time, he makes a lot of efforts to fulfill customers' urgent demands and exchanges with internally efficiently, that promotes the CSL, it's really a **best experience** to work with Vietnam LOP team and so appreciative to your team!",
    name: "",
    dept: "MA - Vietnam"
  },
  {
    quote:
      "Tong Uyen Nhi (Sharework, GS/OSD6-APAC21 MA/LOG-CN): Her **proactive action** is highly helpful for me to answer **accurate and feasible** deliver date to customer.",
    name: "",
    dept: "MA - Japan"
  },
  {
    quote:
      "We're SLC team and would like to take a moment to sincerely thank Ms.Tran Vu Ngoc Tran for her support and effort. Your **dedication and hard working** have truly made a difference, we **deeply appreciate it**.",
    name: "",
    dept: "MA - Vietnam"
  },
  {
    quote:
      "EXTERNAL Trinh Thi Thien Kim (PERSOLKELLY, GS/OSD6-APAC23): いつもサポートいただきありがとうございます。イレギュラーな内容等のまだお願いしていない業務がありますので、今後少しずつお伝えしていければと思います。",
    name: "",
    dept: "VM - Vietnam"
  },
  {
    quote:
      "Ly My Han (GS/OSD6-APAC23) :Thank you so much for your support in import from ChP.your work efficiency has improved since the beginning, hope you can keep improvement.",
    name: "",
    dept: "VM - Vietnam"
  },
  {
    quote:
      "Nguyen Duong Hoai Phuong GS/OSD6. She always gives us feedback quickly and on time. She does not only handle the tasks given, but tries to improve logistic cost and inventory. Have enough knowledge of logistics, SAP, Excel, and other tools needed for our tasks. No problem with English and Japanese.",
    name: "",
    dept: "VM - Vietnam"
  },
  {
    quote:
      "Reliable support from Wei Leng, but her teammates might also tend to rely too much on her sometimes",
    name: "Yeat Siong Loh",
    dept: "ME(PgP1/LOP) - PgP1/ Malaysia"
  },
  {
    quote:
      "Well done on the quick respond , close follow up, commitment during crisis handling. Could improve the awareness of urgency, quick escalation and attention if there's deviation on the OTD. Could further improve on the overall track and trace (inbound and outbound) in one platform.",
    name: "Lih Yii Ching",
    dept: "LOP - PgP1/ Malaysia"
  },
  {
    quote:
      "Phu Minh is very efficient, creating AWB for our deliveries in a quick and efficient way. He provides clear information when requested and works in a timely manor. He questions if things don not appear quite right and often picks up errors before they are made. He is great to work with and no task is ever too much effort. Great performance and a pleasure to work with.",
    name: "Alison Feely",
    dept: "Bosch Automotive Service Solutions - OE - Australia"
  },
  {
    quote:
      "Minh is consistently helpful, highly knowledgeable, and incredibly responsive. No matter the complexity of the query, Minh always provides clear and timely support, making collaboration smooth and efficient. A pleasure to work with!",
    name: "Siobhan Bonne",
    dept: "Bosch Automotive Services - Australia"
  },
  {
    quote: "Excellent service and great team!",
    name: "Philipp Clemens WECKENMANN",
    dept: "MA - Shanghai, China"
  },
  {
    quote:
      "I appreciate Phuong's help not just with the shipment but with other inquiry she is knowledgeable. She don't hesitate to extent help in any way possible and her response is always real time. Thank you so much",
    name: "Lilibeth Caspe",
    dept: "BT FIRE - Philippines"
  },
  {
    quote:
      "Huynh Mai Nga My is the perfect contact for us. no improvements can be added",
    name: "Bjoern Schuldt",
    dept: "ME-SO - Reutlingen, Germany"
  },
  {
    quote:
      "Ms. Tran Thuy Hong Minh and Ms. Tran Le Bao Vy are proactive in her service which helps us to react with expedited shipment immeadiately, Also providing with the excellent services.",
    name: "Truong Nguyen Thanh",
    dept: "HcP/TEF3.2 - Viet Nam"
  },
  {
    quote:
      "Nguyen Nu Hieu Hang (GS/OSD3-APAC211) **has been helping me a lot** with transport issues and especially with the direct shipping lanes and new projects. Thanks for your support !",
    name: "Daniel Wasserman",
    dept: "MA/LOP1-AO - Australia"
  },
  {
    quote:
      "Ms.Nguyen Nu Hieu Hang and her team have been delivering excellent service to support MA dept",
    name: "Son Tung Nguyen",
    dept: "MA - Vietnam"
  },
  {
    quote:
      "Thanks all for support and contribution to MA business，especially appreciate Nguyen Nu Hieu Hang for her steadfast support.",
    name: "Suhan WANG",
    dept: "MA APAC - China"
  },
  {
    quote:
      "TMC team very supportive & quick response (Especially Nguyen Cao Thao Nguyen (GS/OSD3-APAC21) )",
    name: "Gee Ming Tan",
    dept: "PgP2/LOM - PgP2/ Malaysia"
  }
]

const Mock = {
  Testimonials
}
export default Mock
