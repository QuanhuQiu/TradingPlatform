/**
 * Created by Frank Qiu on 2016/11/2.
 */
'use strict';


angular.module('frankApp').value('Error', {
        'inputError': {
            'inputPhoneError': '������绰����',
            'inputPasswordError': '����������',
            'inputCodeError': '��������֤��',
            'inputCodeAgainError': '���ٴ���������',
            'inputAccountError': '�������˺�',
            'inputnameError': '�������ǳ�'
        },
        'logInError': {
            'accountEmptyError': '�˺���δע��',
            'passwordError': '�������'
        },
        'registerError': {
            'phoneIsInvalidError': '�ֻ����벻����',
            'phoneIsAlreadyRegisteredError': '�ֻ�������ע��',
            'ensurePasswordError': '�����������벻һ��',
            'nameRepeatError': '�����ǳ��Ѵ���',
            'codeError': '��֤�����'
        }
    }
);