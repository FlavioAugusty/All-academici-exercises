#include <iostream>
using namespace std;

int main() {
    int decimal, resto, binario = 0, i = 1;
    cout << "Digite um numero decimal: ";
    cin >> decimal;
    while (decimal != 0) {
        resto = decimal % 2;
        decimal /= 2;
        binario = binario + resto * i;
        i *= 10;
    }
    cout << "O numero binario equivalente eh: " << binario << endl;
    return 0;
}
