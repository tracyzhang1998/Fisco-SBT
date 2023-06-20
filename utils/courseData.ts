interface ITableCourseData{
    id: number
    name: string
    img: string
    classHour: number
    description: string
}

const tableCourseData: ITableCourseData[] =  [{
    "id": 1,
    "name": "Java",
    "classHour": 27,
    "img": "/assets/img/java.jpg",
    "description": "Java是一种面向对象的编程语言，由Sun Microsystems于1995年发布。Java设计的初衷是为了开发可移植、高性能的应用程序。Java代码可以在不同的操作系统上运行，包括Windows、Linux、Mac等。"
},

    {
        "id": 2,
        "name": "Golang",
        "classHour": 54,
        "img": "/assets/img/golang.jpg",
        "description": " Go语言的强项在于它适合用来开发网络并发方面的服务,比如消息推送、监控、容器等,所以在高并发的项目上大多数公司会优先选择 Golang 作为开发语言。"
    },

    {
        "id": 3,
        "name": "Solidity",
        "classHour": 32,
        "img": "/assets/img/solidity.jpg",
        "description": "Solidity是面向智能合约的编程语言。也即Solidity发明出来的目的就是为了实现智能合约。但是请注意，智能合约的实现手段不止是Solidity，其他的语言比如Go, JS等同样可以用来实现智能合约。"
    },

    {
        "id": 4,
        "name": "Python",
        "classHour": 18,
        "img": "/assets/img/python.jpg",
        "description": "Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。"
    },

    {
        "id": 5,
        "name": "PHP",
        "classHour": 36,
        "img": "/assets/img/php.jpg",
        "description": " PHP是一种服务器端的HTML脚本/编程语言,是一种简单的、面向对象的、解释型的、健壮的、安全的、性能非常之高的、独立于架构的、可移植的、动态的脚本语言"
    },

    {
        "id": 6,
        "name": "Rust",
        "classHour": 24,
        "img": "/assets/img/rust.jpg",
        "description": "Rust目标 干掉以前容易出错的语言。 很有可能替换掉c++。 rust特点 不能指向null,悬垂指针。 rust优势 因为没有虚拟机,所以不会出现STW"
    }
]

export default tableCourseData
export type {
    ITableCourseData
}
