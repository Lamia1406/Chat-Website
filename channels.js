const mockChannels = [{
        id: "0nlbop5f1e",
        name: "Channel 1",
        favorite: false,
        messages: [],
        latestMessage: "17:24"
    },
    {
        id: "6xwd0whqpv",
        name: "Channel 2",
        favorite: false,
        messages: [],
        latestMessage: "13:20"
    },
    {
        id: "pc2z0hhkyf",
        name: "Channel 3",
        favorite: false,
        messages: [],
        latestMessage: "16:02"
    },
    {
        id: "achndt7tst",
        name: "Channel 4",
        favorite: false,
        messages: [],
        latestMessage: "Yesterday"
    }
];
const listStyle = document.createElement('style');
listStyle.innerHTML=` .channel-list li {
    box-sizing: border-box;
    padding: 22px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.channel-list li:hover {
    background-color: #f5f5f5;
} `;
document.head.appendChild(listStyle);


