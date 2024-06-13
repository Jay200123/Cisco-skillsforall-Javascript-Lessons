exports.Lesson1Quiz = () => {
  console.log("Lesson 1 Quiz");

  const rose = "Rose";
  const lily = "Lily";
  const tulip = "Tulip";

  const rosePrice = 8;
  const lilyPrice = 10;
  const tulipPrice = 2;

  let roseQty = 70;
  let liliesQty = 50;
  let tulipQty = 120;

  let roseValue = rosePrice * roseQty;
  let lilyValue = lilyPrice * liliesQty;
  let tulipValue = tulipPrice * tulipQty;

  console.log("=================================================");
  console.log("No. #1");

  console.log(
    `${rose} - unit price: ${rosePrice} , quantity: ${roseQty} , value: ${roseValue}`
  );
  console.log(
    `${lily} - unit price: ${lilyPrice} , quantity: ${liliesQty} , value: ${lilyValue}`
  );
  console.log(
    `${tulip} - unit price: ${tulipPrice} , quantity: ${tulipQty} , value: ${tulipValue}`
  );

  let total = roseValue + lilyValue + tulipValue;
  console.log("Total: " + total);

  console.log("=================================================");
  console.log("No. #2");

  roseQty = 20;
  liliesQty = 30;

  roseValue = rosePrice * roseQty;
  lilyValue = lilyPrice * liliesQty;
  tulipValue = tulipPrice * tulipQty;

  console.log(
    `${rose} - unit price: ${rosePrice} , quantity: ${roseQty} , value: ${roseValue}`
  );
  console.log(
    `${lily} - unit price: ${lilyPrice} , quantity: ${liliesQty} , value: ${lilyValue}`
  );
  console.log(
    `${tulip} - unit price: ${tulipPrice} , quantity: ${tulipQty} , value: ${tulipValue}`
  );
};

exports.Lesson1Quiz2 = () => {
  console.log("=================================================");
  const firstName = "Maxwell Wright";
  const secondName = "Raja Villarreal";
  const thirdName = "Helen Richards";

  const firstPhone = "(0191) 719 6495";
  const secondPhone = "0866 398 2895";
  const thirdPhone = "0800 11111";

  const firstEmail = "Curabitur.egestas.nunc@nonummyac.co.uk";
  const secondEmail = "posuere.vulputate@sed.com";
  const thirdEmail = "libero@convallis.edu";

  console.log(`${firstName}/${firstPhone}/${firstEmail}`);
  console.log(`${secondName}/${secondPhone}/${secondEmail}`);
  console.log(`${thirdName}/${thirdPhone}/${thirdEmail}`);
};
