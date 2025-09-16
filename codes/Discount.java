import java.util.Scanner;

public class Discount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the discounted price: ");
        double discountedPrice = sc.nextDouble();
        System.out.print("Enter the discount percentage: ");
        double discountPercent = sc.nextDouble();
        double originalPrice = discountedPrice / (1 - discountPercent / 100);
        System.out.printf("The original price is: %.2f%n", originalPrice);
        sc.close();
    }
}
