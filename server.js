import express from "express";

console.log("Tôi lần đầu học express js");

//bước 1 : khởi tạo bằng lệnh npm init => package.json
//bước 2: cài đặt express js

const app = express();

app.use(express.json());

const PORT = 3069;

//restfull api =>
//GET, POST, PUT, DELETE (PATCH)
//endpoints
//request , response , middle ware => xác thực cookies

app.get("/", (request, response, next) => {
    // console.log(response);
    response.status(201).json("Dự án expressjs demo 100");
});

//js hiểu json => chưa được parse thành object của javascript

// JSON.stringify();
// JSON.parse();

//200 - success
//201 - created successfull
//404 - not found
//403 - forbidden
//500 - server error

let arrFilm = [
    {
        maPhim: 1,
        tenPhim: "Lật mặt 48h",
        biDanh: "lat-mat-48h1234",
        trailer: "https://www.youtube.com/watch?v=kBY2k3G6LsM",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg",
        moTa: "",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-10-10T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
    },
    {
        maPhim: 2,
        tenPhim: "Cua lại vợ bầu",
        biDanh: "black-windo",
        trailer: "https://www.youtube.com/watch?v=l8vTMxuvz6Y",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/cua-lai-vo-bau_gp01.jpg",
        moTa: "Trọng Thoại và Nhã Linh yêu nhau đã được bảy năm. Những lỗi lầm nho nhỏ bắt đầu tích tụ thành mâu thuẫn cực lớn đẩy cả hai xa nhau. Lại thêm sự xuất hiện của người cũ Quý Khánh càng khiến Nhã Linh xao lòng. Và rồi, cô có thai. Rốt cuộc đứa bé là của ai và Nhã Linh sẽ chọn người đàn ông nào đi tiếp cùng mình",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-08-26T15:11:29.533",
        danhGia: 10,
        hot: false,
        dangChieu: false,
        sapChieu: true,
    },
    {
        maPhim: 3,
        tenPhim: "Lừa đểu gặp lừa đảo",
        biDanh: "lua-deu-gap-lua-dao-5",
        trailer: "https://www.youtube.com/watch?v=cy7O9tk0XZA",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-daoo_gp01.jpg",
        moTa: 'Lừa Đểu Gặp Lừa Đảo xoay quanh lần gặp gỡ "oan gia" giữa siêu lừa đảo Tower cùng cô nàng bị lừa tình Ina, cả 2 sẽ cùng hợp tác trong phi vụ "lừa lại tên lừa đểu" Petch - tên bạn trai bội bạc của Ina bằng những chiêu trò lừa đảo không hồi kết.',
        maNhom: "GP01",
        ngayKhoiChieu: "2024-08-26T14:47:53.63",
        danhGia: 10,
        hot: true,
        dangChieu: false,
        sapChieu: true,
    },
    {
        maPhim: 4,
        tenPhim: "Siêu lừa gặp Siêu lầy",
        biDanh: "sieu-lua-gap-sieu-lay",
        trailer: "https://www.youtube.com/watch?v=kdn0xrDf8tY",
        hinhAnh:
            "https://movienew.cybersoft.edu.vn/hinhanh/sieu-lua-sieu-lay_gp01.jpg",
        moTa: "Thuộc phong cách hành động – hài hước với các “cú lừa” thông minh và lầy lội đến từ bộ đôi Tú (Anh Tú) và Khoa (Mạc Văn Khoa), Siêu Lừa Gặp Siêu Lầy của đạo diễn Võ Thanh Hòa theo chân của Khoa – tên lừa đảo tầm cỡ “quốc nội” đến đảo ngọc Phú Quốc với mong muốn đổi đời. Tại đây, Khoa gặp Tú – tay lừa đảo “hàng real” và cùng Tú thực hiện các phi vụ từ nhỏ đến lớn. Cứ ngỡ sự ranh mãnh của Tú và sự may mắn trời cho của Khoa sẽ giúp họ trở thành bộ đôi bất khả chiến bại, nào ngờ lại đối mặt với nhiều tình huống dở khóc – dở cười. Nhất là khi băng nhóm của bộ đôi nhanh chóng mở rộng vì sự góp mặt của ông Năm (Nhất Trung) và bé Mã Lai (Ngọc Phước)",
        maNhom: "GP01",
        ngayKhoiChieu: "2024-10-10T00:00:00",
        danhGia: 4,
        hot: false,
        dangChieu: true,
        sapChieu: true,
    },
];

//get req thông qua query params từ thanh search
app.get("/query", (req, res, next) => {
    const query = req.query;
    console.log(query);
    res.json(query);
});

//get dữ liệu thông qua param/:id
app.get("/params/:huhu", (req, res, next) => {
    // res.json("Đây là request params");
    const params = req.params;
    console.log(params);
    res.json(params);
});

//post thông qua body trả dữ liệu khi client gửi lên ;
app.post("/body", (req, res, next) => {
    // res.json("Đây là request post something from client");
    const formBody = req.body;
    console.log(formBody);
    res.json(formBody);
});

//gửi headers kiểm tra các giao thức tương tác api
app.post("/headers", (req, res, next) => {
    const headers = req.headers;
    console.log(headers);
    res.json(headers);
});

//get all list film
app.get("/get-all-film", (req, res, next) => {
    console.log("ds film nef");
    res.status(200).json(arrFilm);
});

//get film by ID
app.get("/get-film-by-id/:id", (req, res, next) => {
    console.log("ds film nef");
    const { id } = req.params;
    let index = arrFilm.findIndex((film) => film.maPhim == id);
    if (index !== -1) {
        res.status(200).json(arrFilm[index]);
    } else {
        res.status(404).json("Khong co phim nay nha !");
    }
});

//post film
app.post("/create-film", (req, res, next) => {
    const filmCreate = req.body;
    let newFilm = {
        maPhim: Math.floor(Math.random() * 100 + 5),
        ...filmCreate,
    };
    arrFilm = [...arrFilm, newFilm];
    res.status(201).json(arrFilm);
});

//delete /put  CRUD

//hot reload -> nodemon hoặc reload trong package.json

app.listen(3069, () => {
    console.log("Server đã được kết nối");
});
