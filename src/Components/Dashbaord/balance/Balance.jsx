// components/BalanceCard.js

function BalanceCard() {
     return (
          <div className="bg-gradient-to-br    rounded-md p-7  shadow  max-w-[350px]  ">
                <h1 className=" text-lg md:text-2xl font-bold my-1 secondary"> Your Balance</h1>
               <div className=" bgColor p-4 rounded-md">
                    <div className="mb-4">
                         <div className="text-2xl textColor  font-bold">$5,000.00</div>
                         <div className="text-base   primary">Available Balance</div>
                    </div>
                 
               </div>
          </div>
     );
}

export default BalanceCard;
