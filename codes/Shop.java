import java.util.Scanner;

public class Shop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double priceOrder = 0, total, money, change;	
        boolean loop = true;
        int quantity;
		String product = "";

			
        while (loop) {
            menu();
            int ordernum = scanner.nextInt();
            switch (ordernum) {
                case 1:
                    priceOrder = 19.99;
                    product = "Coffie";
                    loop = false;
                    break;
                case 2:
                    priceOrder = 4.99;
                    product = "Bread";
                    loop = false;
                    break;
                case 3:
                    priceOrder = 39.99;
                    product = "Pizza";
                    loop = false;
                    break;
                default:
                    System.out.println("Wrong Input, Try again!");
            }
        }

        System.out.print("How many quantity: ");
        quantity = scanner.nextInt();
        
        total = quantity * priceOrder;

        System.out.print("Enter Customer Money: ");
        money = scanner.nextDouble();

        while (money < total) {
            System.out.println("Invalid, not enough money.");
            System.out.print("Enter Customer Money: ");
            money = scanner.nextDouble();
        }

        change = money - total;

        System.out.printf("Change: $%.5s\n",change);

        scanner.close();
    }

    public static void menu() {
        System.out.println("********************");
        System.out.println("********MENU********");
        System.out.println("********************");
        System.out.println("(1) Coffee $19.99\n(2) Bread $4.99\n(3) Pizza $39.99");
        System.out.print("Select # Order: ");
    }
}
