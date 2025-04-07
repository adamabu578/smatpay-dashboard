"use client"

import { useState } from "react"
import { CreditCard, Wallet } from "lucide-react"

function BuyData() {
  const [network, setNetwork] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const purchaseHistory = [
    { id: 1, network: "MTN", phoneNumber: "08012345678", amount: "₦500.00", date: "2023-04-15", status: "Successful" },
    { id: 2, network: "Airtel", phoneNumber: "09087654321", amount: "₦1,000.00", date: "2023-04-10", status: "Successful" },
    { id: 3, network: "Glo", phoneNumber: "08123456789", amount: "₦200.00", date: "2023-04-05", status: "Failed" },
  ]

  return (
    <div className="flex justify-center items-center min-h-screen p-6 md:p-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8 ">
        {/* <img src="/smatpay.svg" className="w-[50px] mx-auto" /> */}
        <img
         src="/logo-design.png"
         className="w-[100px]"
         style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          />
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Adamu</h1>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center space-y-6">
          {/* Network */}
          <div className="w-full max-w-[700px] text-center">
            <label className="block font-medium text-gray-700 mb-1">Network</label>
            <select
              className="w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="">Select</option>
              <option value="mtn">MTN</option>
              <option value="airtel">Airtel</option>
              <option value="glo">Glo</option>
              <option value="9mobile">9Mobile</option>
            </select>
          </div>

    

        <div className="w-full max-w-[700px] text-center">
            <label className="block font-medium text-gray-700 mb-1">Bundle</label>
            <select
              className="w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="">Select</option>
              <option value="mtn">500MB - &#8358;500</option>
              <option value="airtel">1.5GB - &#8358;1000 </option>
              <option value="glo">1.5GB - &#8358;1000 </option>
              <option value="9mobile">1.5GB - &#8358;1000 </option>
            </select>
          </div>

      
           <div className="w-full max-w-[700px] text-center">
            <label className="block font-medium text-gray-700 mb-1">Phone number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

         
          <div className="w-full max-w-[700px] flex flex-col space-y-20">
            <label className="block font-medium text-gray-700 text-center" style={{ marginBottom: "30px" }}>Payment Method</label>
            <div className="flex justify-center gap-6">
              <div
                className={`bg-gray-100 w-[250px]  p-4 rounded-md flex flex-col items-center justify-center cursor-pointer transition-all ${
                  paymentMethod === "wallet" ? "ring-2 ring-blue-500" : "hover:bg-gray-200"
                }`}
                onClick={() => setPaymentMethod("wallet")}
              >
                <Wallet className="text-blue-500 mb-2 h-6 w-6" />
                <span className="font-medium">Wallet</span>
                <span className="text-gray-600">₦922.20</span>
              </div>
              <div
                className={`bg-gray-100 w-[250px] p-4 rounded-md flex flex-col items-center justify-center cursor-pointer transition-all ${
                  paymentMethod === "online" ? "ring-2 ring-blue-500" : "hover:bg-gray-200"
                }`}
                onClick={() => setPaymentMethod("online")}
              >
                <CreditCard className="text-blue-500 mb-2 h-6 w-6" />
                <span className="font-medium">Pay online</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-[300px] bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300  font-medium" style={{ marginTop: "30px" }}>
            Pay Now
          </button>
        </div>

        {/* Purchase History Card */}
        <div className="mt-16  pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Purchase History</h2>
          <div className="space-y-4">
            {purchaseHistory.map((purchase) => (
              <div key={purchase.id} className=" p-4 rounded-md border border-gray-200" style={{ padding: "10px" }}>
                <div className="flex justify-between items-center">
                  <div className="text-center sm:text-left">
                    <p className="font-medium">{purchase.network}</p>
                    <p className="text-sm text-gray-600">{purchase.phoneNumber}</p>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="font-medium">{purchase.amount}</p>
                    <p className="text-sm text-gray-600">{purchase.date}</p>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      purchase.status === "Successful"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {purchase.status}
                  </span>
                  <button className="text-blue-500 text-sm hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default BuyData
