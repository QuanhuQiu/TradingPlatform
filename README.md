һ.�����ĿĿǰ���ڵ�����



1.sidebar��hoverα��ͻȻ�Ͳ����ˣ���cursor�����ˡ�
2.navbar�������������ֵ��ַ���
3.modalģ̬����ֵ�λ�ò��������С�
4.navbar���ע���¼��ťhoverʱ��״̬��(û�а취������navbarһ����)
5.modalģ̬�����Input���������ַ���ʱ���ܷ���Ȼ������ɫ��״̬��
6.Ϊʲô��ʱ��ѿ���̨����ҳ����ʽ�᲻һ����
7.modalģ̬��ƥ��Ŀ������ܷ������ݣ�����һ��Ҫ���ݵ����Ŀ�����������������ݴ���
8.ΪʲôҪ��$resource���涨��һ��put������

��.�����Ŀ�����ݿ�ṹ

user{
uid,phone,password,name,[commodity]
}
commodity{
{user},uid,cid,[img],title,price,chaffer,address,time,description.[remarks]
}
remarks{
uid,cid,time,content,{user}
}



��.�������Ŀ���ջ�

1.��ô��һ��widthȷ������content��ȷ���Ŀؼ���ʹpadding-left����padding-right  :  text-align: center;

2.��һ��modal�򿪵�ģ̬�������ǿ���ֱ�������ⲿ�����������function($scope.test)�ģ�ǰ����modal����������û������$scope(��Ϊ�������Ժ��������ⲻ��).


��.��������֤���Ҫ��.

�������ѵġ�
����node.js�˵�demo.
