// Update a user

var url = "http://localhost:8080/api/v1/users/12"; // Đặt URL trực tiếp ở đây và thêm "/12" để cập nhật người dùng có ID là 12

var data = {
    firstname: "John2",
    lastname: "Snow2"
};

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();

xhr.open("PUT", url, true);

xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Kiểm tra trạng thái đã hoàn thành
        if (xhr.status === 200) { // Kiểm tra mã trạng thái thành công
            var updatedUser = JSON.parse(xhr.responseText);
            console.table(updatedUser);
        } else {
            console.error("Không thể cập nhật thông tin người dùng. Mã lỗi: " + xhr.status);
        }
    }
};

xhr.send(json);