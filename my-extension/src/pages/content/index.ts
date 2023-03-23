console.log('content script from the my-extension is loaded');

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import('../../components/ContentArea');
