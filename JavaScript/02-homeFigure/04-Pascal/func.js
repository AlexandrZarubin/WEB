// JavaScript source code

// ������� ����������
function fact(x)
{
    let res = 1;
    for (let i = 2; i <= x; i++) res *= i;
    return res;
}

// ������������ �����������
function C(n, k)
{
    return fact(n) / (fact(k) * fact(n - k));
}
