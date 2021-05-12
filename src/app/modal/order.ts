export class Order {
  constructor(){}


  item: {
    app_key: "",
    app_secret: "",
    access_token: "",
    orderInfo: {
      OrderInfo: {
        restaurant: {
          details: {
            res_name: "",
            address: "",
            contact_information: "",
            restID: ""
          }
        },
        Customer: {
          details: {
            email: "",
            name: "",
            address: "",
            phone: "",
            locality: ""
          }
        },
        order: {
          details: {
            orderID: "",
            preorder_date: "",
            preorder_time: "",
            minimum_order_amount: "",
            delivery_charges: "",
            order_type: "",
            packing_charges: "",
            advance_order: "",
            payment_type: "",
            discount: "",
            discount_total: "",
            description: "",
            discount_type: "",
            tax_total: "",
            total: "",
            created_on: "",
            callback_url: ""
          }
        },
        orderItem: {
          detail: [
            [
              {
                id: "",
                name: "",
                price: "",
                quantity: "",
                description: "",
                AddonItem: {
                  details: [
                    {
                      id:"",
                      name: "",
                      group_name: "",
                      price: "",
                      group_id: "",
                      quantity: ""
                    }
                  ]
                }
              }
            ]
          ]
        },
        tax: {
          details: [
            {
              id: "",
              title: "",
              price: "",
              type: ""
            }
          ]
        }
      }
    }
  }



}
