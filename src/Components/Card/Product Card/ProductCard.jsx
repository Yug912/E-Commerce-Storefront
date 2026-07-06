import { Card, CardActionArea, CardActions, IconButton, Rating, Tooltip, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import useWishlist from '../../../Hooks/useWishlist';
import styles from './ProductCard.module.css'

export default function ProductCard({ prod, showWishlistAction = true }) {
    const navigate = useNavigate();
    const {
        addToWishlist,
        removeFromWishlist,
        getWishlistItemByProductId,
        isAuthenticated,
        isInWishlist,
        wishlistLoading
    } = useWishlist();

    const productInWishlist = isInWishlist(prod?._id);
    const detailPath = `/Detail/type/${prod?.type}/${prod?._id}`;

    const handleWishlistClick = async () => {
        if (!isAuthenticated) {
            toast.info("Please login to manage wishlist", { autoClose: 700, theme: 'colored' });
            navigate('/login');
            return;
        }

        try {
            if (productInWishlist) {
                const wishlistItem = getWishlistItemByProductId(prod._id);
                await removeFromWishlist(wishlistItem);
                toast.success("Removed From Wishlist", { autoClose: 500, theme: 'colored' });
                return;
            }

            const result = await addToWishlist(prod);
            if (result.duplicate) {
                toast.info("Already in Wishlist", { autoClose: 500, theme: 'colored' });
            } else {
                toast.success("Added To Wishlist", { autoClose: 500, theme: 'colored' });
            }
        } catch (error) {
            toast.error(error.message, { autoClose: 700, theme: 'colored' });
        }
    };

    return (
        <Card className={styles.main_card}>
            <CardActionArea className={styles.card_action} component={Link} to={detailPath}>
                <Box className={styles.cart_box}>
                    <img alt={prod.name} src={prod.image} loading='lazy' className={styles.cart_img} />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ textAlign: "center" }}>
                        {prod.name.length > 20 ? prod.name.slice(0, 20) + '...' : prod.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
                <Typography variant="h6" color="primary">
                    ₹{prod.price}
                </Typography>
                <Typography>
                    <Rating precision={0.5} name="read-only" value={prod.rating} readOnly />
                </Typography>
                {showWishlistAction && (
                    <Tooltip title={productInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}>
                        <span>
                            <IconButton
                                aria-label={productInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                                color={productInWishlist ? 'error' : 'primary'}
                                disabled={wishlistLoading}
                                onClick={handleWishlistClick}
                                className={styles.wishlist_btn}
                            >
                                {productInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
                            </IconButton>
                        </span>
                    </Tooltip>
                )}
            </CardActions>
        </Card >
    );
}
