export function leftZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

export const onlyNumbers = (value, maxLength=value ? value.length : 0) => {
  if (!value) return value;
  return value.replace(/[^\d]/g, "").slice(0, maxLength);
};

export const formatMoney = amount => {
  if (!amount) return amount;
  return amount.toLocaleString("pt-br",{ style: "currency", currency: "BRL", minimumFractionDigits: 2 });
};

export const formatDocument = document => {
  if (!document) return document;

  if (document.length > 11)  {
    return `${document.slice(0, 2)}.${document.slice(2, 5)}.${document.slice(5, 8)}/${document.slice(8, 12)}-${document.slice(12, 14)}`;
  } else {
    return `${document.slice(0, 3)}.${document.slice(3, 6)}.${document.slice(6, 9)}-${document.slice(9, 11)}`;
  }
};

export const formatDate = datetime => {
  if (!datetime) return datetime;
  return `${leftZero(datetime.getDate().toString())}/${leftZero((datetime.getMonth()+1).toString())}/${datetime.getFullYear().toString()}`;
};