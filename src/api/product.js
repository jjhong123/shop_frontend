
import request from "@/utils/request";


// 取得商品資料 (不需要權限)
export function getProduct_pages(page = 1) {
  return request({
    url: `/getproduct?page=${page}`,
    method: "get",
  });
}

//＝＝＝管理員＝＝＝


// 取得商品資料
export function getProduct_admin_pages(page = 1) {
  return request({
    url: `/admin/products?page=${page}`,
    method: "get",
  });
}


// 上傳商品資料
export function newProduct(data) {
  return request({
    url: `/admin/products`,
    method: "post",
    data: {
      name: data.name,
      count: data.count,
      price: data.price,
      status: data.status,
      description: data.description
    }
  });
}

// 更新商品資料
export function updateProduct(data) {
  return request({
    url: `admin/products`,
    method: "put",
    data: {
      id: data.id,
      name: data.name,
      count: data.count,
      status: data.status,
      description: data.description
    }
  });
}

// 刪除商品資料
export function deleteProduct(data) {
  return request({
    url: `/admin/products`,
    method: "delete",
    data: {
      id: data.id
    }
  });
}