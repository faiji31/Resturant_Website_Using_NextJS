  export const feedback =[
    {
        id:1,
        message:"great food and fast delivery"
          },
      {
          id: 2,
          message: "The Burger was so delisious and awesome"
      }
  ]
export async function GET(request) { 

    return Response.json({
        status: 200,
        message: "Api is Working"
    })
}