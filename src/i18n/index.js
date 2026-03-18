import React from "react";

/**
 * i18n — 다국어 매핑 유틸리티
 *
 * CSV의 다국어 코드(ID)를 키로, 각 언어별 텍스트를 값으로 매핑.
 * 지원 언어: ko, en, ja, zh-TW, zh-CN, es, vi
 *
 * <0>...</0> 태그: 하이퍼링크 등 인라인 요소를 감싸는 마커.
 * tRich()로 렌더링 시 React 엘리먼트로 변환 가능.
 */

export const LANGUAGES = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "zh-TW", label: "繁體中文" },
  { code: "zh-CN", label: "简体中文" },
  { code: "es", label: "Español" },
  { code: "vi", label: "Tiếng Việt" },
];

// 다국어 코드 → 언어별 텍스트
const translations = {
  // Top — 주문 완료 타이틀
  S03000: {
    ko: "주문을 완료했어요",
    en: "Order complete",
    ja: "注文を完了しました。",
    "zh-TW": "我完成了我的訂單",
    "zh-CN": "我完成了我的订单",
    es: "Orden completada",
    vi: "Đã hoàn tất đơn hàng.",
  },
  // Konbini — 타이틀 ({{str1}} = 결제 기한)
  S02702: {
    ko: "{{str1}}까지 결제를 완료해주세요",
    en: "Please complete payment within {{str1}}",
    ja: "{{str1}}までにお支払いを完了させてください。",
    "zh-TW": "請在{{str1}}前完成付款。",
    "zh-CN": "截止{{str1}}完成付款",
    es: "Completa el pago antes del {{str1}}",
    vi: "Hoàn tất thanh toán trước {{str1}} nhé.",
  },
  // Konbini — 설명 (하이퍼링크 없음)
  S02703: {
    ko: "결제가 완료되어야 상품을 발송할 수 있습니다. 주문 확인 후, 이메일 혹은 주문 상세에 기재된 결제 지침 및 안내사항을 바탕으로 결제를 완료해주세요.",
    en: "Complete payment before shipping. After confirming your order, please complete the payment based on the payment instructions and guidelines provided in the email or order details.",
    ja: "お支払いが完了次第、商品を配送できます。注文を確認後、メールおよび、注文詳細に記載されている支払いガイドラインおよび、案内事項を参考にお支払いを完了されてください。",
    "zh-TW": "只有完成付款才能發送商品。在確認訂單內容後，請依據電子郵件或訂單查詢中提供的付款指示完成付款。",
    "zh-CN": "只有完成付款才能发送商品。确认订单后，请根据您的电子邮件或订单详情中记载的付款指南及说明事项完成付款。",
    es: "Completa el pago antes del envío. Después de confirmar tu pedido, completa el pago según las instrucciones y normas para el pago proporcionadas en el correo electrónico o en los detalles del pedido.",
    vi: "Chúng tôi chỉ có thể gửi sản phẩm sau khi thanh toán hoàn tất. Vui lòng hoàn tất thanh toán dựa trên hướng dẫn được cung cấp qua email hoặc trong chi tiết đơn hàng sau khi xác nhận đơn hàng.",
  },
  // Konbini — 설명 (하이퍼링크 있음, <0>...</0> = 링크 영역)
  S02793: {
    ko: "결제가 완료되어야 상품을 이용할 수 있습니다. 주문 확인 후, 이메일 혹은 주문 상세에 기재된 <0>결제 지침 및 안내사항</0>을 바탕으로 결제를 완료해주세요.",
    en: "Complete payment to use the product. After confirming your order, please complete the payment based on the <0>payment instructions and guidelines</0> provided in the email or order details.",
    ja: "お支払いが完了次第商品をご利用いただけます。注文の確認後、メールまたは、注文詳細に記載されている<0>お支払い方法および、案内事項</0>に基づいてお支払いを完了してください。",
    "zh-TW": "付款完成後才能使用商品。請在確認訂單後，根據電子郵件或訂單詳細信息中列明的<0>支付指南和說明</0>完成支付。",
    "zh-CN": "支付完成后才能使用商品。请在确认订单后，根据电子邮件或订单详细信息中列明的<0>支付指南和说明</0>完成支付。",
    es: "Complete el pago para utilizar el producto. Una vez confirmado el pedido, realice el pago siguiendo las <0>instrucciones y directrices de pago</0> que aparecen en el correo electrónico o en los datos del pedido.",
    vi: "Bạn có thể sử dụng sản phẩm sau khi hoàn tất thanh toán. Vui lòng hoàn tất thanh toán theo <0>hướng dẫn thanh toán và thông tin</0> được cung cấp trong email hoặc chi tiết đơn hàng sau khi xác nhận đơn hàng.",
  },
  // 액션버튼 — 홈으로 가기
  S00664: {
    ko: "홈으로 가기",
    en: "Go to Home",
    ja: "ホーム画面に戻る",
    "zh-TW": "回到首頁",
    "zh-CN": "回到首页",
    es: "Ir al Inicio",
    vi: "Về Trang chủ",
  },
  // 액션버튼 — 돌아가기
  B00050: {
    ko: "돌아가기",
    en: "Back",
    ja: "戻る",
    "zh-TW": "返回",
    "zh-CN": "返回",
    es: "Atrás",
    vi: "Quay lại",
  },
};

/**
 * 다국어 텍스트 조회 (plain string)
 * {{str1}} 등의 변수는 params로 치환 가능.
 */
export function t(code, lang = "ko", params = {}) {
  const entry = translations[code];
  if (!entry) return `[${code}]`;
  let text = entry[lang] || entry["ko"] || `[${code}]`;
  // {{str1}} 등 변수 치환
  Object.entries(params).forEach(([key, val]) => {
    text = text.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), val);
  });
  // <0>...</0> 태그 제거 (plain text용)
  text = text.replace(/<0>(.*?)<\/0>/g, "$1");
  return text;
}

/**
 * 다국어 텍스트 조회 (React 엘리먼트, <0>...</0> 를 래퍼 함수로 변환)
 * @param {string} code
 * @param {string} lang
 * @param {object} options - { params, 0: (text) => <a>...</a> }
 */
export function tRich(code, lang = "ko", options = {}) {
  const { params = {}, ...wrappers } = options;
  const entry = translations[code];
  if (!entry) return `[${code}]`;
  let text = entry[lang] || entry["ko"] || `[${code}]`;
  // 변수 치환
  Object.entries(params).forEach(([key, val]) => {
    text = text.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), val);
  });
  // <0>...</0> 태그를 React 엘리먼트로 변환
  const parts = text.split(/(<\d+>.*?<\/\d+>)/g);
  return parts.map((part, i) => {
    const match = part.match(/^<(\d+)>(.*?)<\/\d+>$/);
    if (match) {
      const idx = match[1];
      const inner = match[2];
      const wrapper = wrappers[idx];
      return wrapper ? React.cloneElement(wrapper(inner), { key: i }) : inner;
    }
    return part;
  });
}

export function addTranslation(code, values) {
  translations[code] = { ...translations[code], ...values };
}

export default translations;
